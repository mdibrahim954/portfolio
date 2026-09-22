"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Plus, SendIcon, Trash } from "lucide-react";

import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { isValidEmail } from "@/lib/settings";


type Subscriber = {
  id: number;
  name: string;
  email: string;
  ip: string;
  website: string | null;
  created_at: string;
};

type DailogState = {
    open: boolean,
    id: string
} 

type FormData = {
  name: string;
  email: string;
  ip: string;
  website: string;
};

type EmailData = {
  name: string | null,
  email: string | null,
  message: string | null
}

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [checkedRows, setCheckedRows] = useState<boolean[]>([]);
  const [preloader , setPreloader] = useState<boolean>(true);
  const [_formData , set_FormData] = useState<FormData>({
    name: "",
    email: "",
    ip: "",
    website: ""
  });



  const [isOpenDailog , setIsOpenDailog] = useState<DailogState>({
    open: false,
    id: ""
  });

  const subscriber = useRef(null)

  const fetchEmails = async () => {
    try {
      const response = await fetch("/api/subscriber");
  
      if (!response.ok) {
        setPreloader(false);
        return;
      }
  
      const json = (await response.json()) as { data?: Subscriber[] };
      const rows = Array.isArray(json.data) ? json.data : [];
  
      setSubscribers(rows);
      setCheckedRows(new Array(rows.length).fill(false));
    } catch (err) {
      console.error("Failed to fetch subscribers:", err);
    } finally {
      setPreloader(false);
    }
  };
  
  useEffect(() => {
    fetchEmails();
  }, []);


  const allChecked = checkedRows.length > 0 && checkedRows.every(Boolean);
  const someChecked = checkedRows.some(Boolean);

  const toggleAll = (value: boolean) => {
    setCheckedRows(new Array(subscribers.length).fill(value));
    console.log(checkedRows);
    
  };

  const toggleRow = (index: number, value: boolean) => {
    setCheckedRows((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleValueChange = (e :  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
    const {name , value} = e.target;
    set_FormData((prev)=> ({...prev , [name]: value}))
  }

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

   

    const validEmail = isValidEmail(_formData.email);

    if(!validEmail){
      toast.warning("Invalid Email" ,  {
        description: "Please Enter a valid email!"
      })
      return 
    }



    try{
      console.log(_formData);
      
      const response = await fetch("/api/subscriber" , {
        method: "POST", 
        body: JSON.stringify(_formData)
      })



      console.log(response);
      
      
      const res = await response.json();
      console.log(res);
      if(!response.ok){
        
        toast.error("Something is wrong " ,  {
          description: res.message || "Please try agin leter!"
        })
        return
      }



      toast.success("Added new email" ,  {
        description: res.message || "Added new email successfully!"
      })

      fetchEmails();

    }catch{
      toast.error("Something is wrong " ,  {
        description: "Please try agin leter!"
      })
    }
    
  }

  const handleDeleteItem = async ({id} : {id: number | string})=>{
    const row = document.querySelector(`.email-data-row[data-id="${id}"]`);

    try{
      const response = await fetch("/api/subscriber" , {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
            },
           
          body: JSON.stringify({ id: id }),

      });

      // console.log(response , sub.id );
      

      if(!response.ok){
          throw new Error('Failed to delete item');
      }

      const data = await response.json();

      toast.success("Subscriber deleted.", {
        description: data?.message ?? "The email was removed successfully.",

      });
      // subscriber.current.remove()
      // console.log(subscriber);
  
      console.log('Item deleted successfully');
      row?.classList.add("fade-out");
      setInterval(()=>{
        row?.remove();
      } , 3000)

   }catch (err1){
      console.error(err1)
   }
    
 
  }


  const checkedItemDeleted = () => {
    const dataCheckBox = document.querySelectorAll(
      ".ndev-email-checkbox[data-state='checked']"
    );
  
    const idsToDelete: string[] = [];

    if(dataCheckBox.length <= 0){
      toast.warning("Warning" , {
        description: "Please mustbe checked 1 items!",
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid #fecaca",
        }
      })
      return;
    }
  
    dataCheckBox.forEach((element) => {
      const dataId = element.getAttribute("data-id");
      if (dataId) {
        handleDeleteItem({id: dataId})
        idsToDelete.push(dataId);
      }
    });
  
    console.log(idsToDelete); // now has the actual IDs of checked rows
  };
  
  return (
    <>
    <div className="flex justify-between" >
      <Badge variant={"outline"} className="text-sm" >Subscribers</Badge>
     
      <ButtonGroup >
        <DeleteButtonComponent deleteButtonHandler={checkedItemDeleted} />
        <ButtonGroupSeparator />
        <Button className="cursor-pointer" variant={"outline"} >Export</Button>
        <ButtonGroupSeparator />
        <Button className="cursor-pointer" variant={"outline"} >Send Email</Button>
        <ButtonGroupSeparator />
        {/* <ButtonGroupSeparator /> */}
        <AddNewEmailButtonComponent  onSubmit={handleSubmit} handleValueChange={handleValueChange}  formData={_formData} />
      </ButtonGroup>
    </div>
  
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">
            <Checkbox
              checked={allChecked ? true : someChecked ? "indeterminate" : false}
              onCheckedChange={(value) => toggleAll(!!value)}
            />
          </TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Ip</TableHead>
          <TableHead>Website</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>...</TableHead>
          <TableHead className="text-right">...</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { preloader? <DataSkeleton /> : subscribers.map((sub, index) => (
          <TableRow className="email-data-row" ref={subscriber} data-id={sub.id} key={sub.id}>
            <TableCell>
              <Checkbox
                className="ndev-email-checkbox"
                data-id={sub.id}
                checked={checkedRows[index] ?? false}
                onCheckedChange={(value) => toggleRow(index, !!value)}
              />
            </TableCell>
            <TableCell className="font-medium">{sub.name || "—"}</TableCell>
            <TableCell>{sub.email}</TableCell>
            <TableCell>{sub.ip || "—"}</TableCell>
            <TableCell>{sub.website || "—"}</TableCell>
            <TableCell>
              {sub.created_at
                ? new Date(sub.created_at).toLocaleDateString()
                : "—"}
            </TableCell>
            <TableCell>    
            <Dialog>
                <DialogTrigger onClick={()=>{
                setIsOpenDailog({
                    open: true,
                    id: sub.id.toString()
                });
              }}  asChild>
                  <Badge className="cursor-pointer" variant="destructive">Delete</Badge>
                </DialogTrigger>
                { isOpenDailog ?
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Alert</DialogTitle>
                    <DialogDescription>
                    <p key={index} className="mb-4 leading-normal text-black">
                        Are you sure for Delete this email <b>{sub?.email}</b> ?
                      </p>
                    </DialogDescription>
                  </DialogHeader>
              
                  <DialogFooter>
                     
                    <DialogClose  asChild>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                    <DialogClose>
                         <Button onClick={ ()=> {handleDeleteItem({id: sub.id})}} >Yes</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
                : null }
              </Dialog> 
              
            </TableCell>
            <TableCell className="text-right">
            <SendEmailComponent name={sub.name} email={sub.email}  />
             
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
    </>
  );
}


export function DeleteButtonComponent({deleteButtonHandler} : {deleteButtonHandler: any}){
  return (
    <Dialog>
    <DialogTrigger  asChild>
      <Button className="cursor-pointer text-red-500" variant="outline"><Trash />Delete</Button>
    </DialogTrigger>
    
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Alert</DialogTitle>
        <DialogDescription>
        <p  className="mb-4 leading-normal text-black">
            Are you sure for Delete this emails?
          </p>
        </DialogDescription>
      </DialogHeader>
  
      <DialogFooter>
          
        <DialogClose  asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <DialogClose>
              <Button onClick={deleteButtonHandler} >Yes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
    
  </Dialog> 
  )
}

export function AddNewEmailButtonComponent({ onSubmit , handleValueChange , formData} : { onSubmit: any , handleValueChange: any , formData: any}){
  // const [_formData , set_FormData] = useState<FormData>({
  //   name: "",
  //   email: "",
  //   ip: "",
  //   website: ""
  // });








  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="cursor-pointer" variant="outline"><Plus /> Add new</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-sm">
      <form method="POST" onSubmit={onSubmit}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" onChange={handleValueChange} name="name" value={formData.name} placeholder="Jon Doe" />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" onChange={handleValueChange} value={formData.email} placeholder="ex@mail.com" />
          </Field>
          <Field>
            <Label htmlFor="ip">IP</Label>
            <Input id="ip" name="ip" onChange={handleValueChange} value={formData.ip} placeholder="IP Address" />
          </Field>
          <Field>
            <Label htmlFor="website">Website</Label>
            <Input id="website" name="website" onChange={handleValueChange} value={formData.website} placeholder="Website" />
          </Field>
          <Field>
            <Label htmlFor="note">Note</Label>
            <Textarea id="note" name="note" placeholder="Notes" ></Textarea>
            
          </Field>
        </FieldGroup>
        <DialogFooter className="mt-[10px]" >
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">New Email</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
  )
}

export function SendEmailComponent({name , email} : {name: string , email: string}){
    const [formData , setFormData] = useState<EmailData>({
      name: name || null ,
      email: email || null,
      message: ""
    });
    const handleSubmit = async () => {
      const response = await fetch("/api/send-email" , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        
        body: JSON.stringify({ name: name , email: email , message: formData.message }),

    });

    if(!response.ok){
      return toast.error("Error" , {
        description: "Something is wrong!"
      })
    }

    const res = await response.json();

    return toast.success("Success" , {
      description: res?.message || "Mail Sended."
    })
  }

  const handleFormData = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
    const {name , value} = e.target;
    setFormData((prev)=> ({...prev , [name]: value}))
  }
  return (
      <Dialog>
        <DialogTrigger asChild>
        <Badge className="cursor-pointer" variant="secondary" ><SendIcon /> Send Mail</Badge>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <form method="POST" onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Send email</DialogTitle>
              <DialogDescription className="mb-[10px]">
            
                <p>Name: <b>{name || "There"}</b></p>
                <p>Email: <b>{email || "Empty Email, not possible to send email"}</b></p>
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" onChange={handleFormData} value={formData.message || ""} placeholder="Write message..." ></Textarea>
                
              </Field>
            </FieldGroup>
            <DialogFooter className="mt-[10px]" >
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Send Email</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
  )
}
export function SendBulkEmail(){
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//       <Badge className="cursor-pointer" variant="secondary" ><SendIcon /> Send Mail</Badge>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-sm">
//         <form method="POST" onSubmit={handleSubmit}>
//           <DialogHeader>
//             <DialogTitle>Send email</DialogTitle>
//             <DialogDescription className="mb-[10px]">
          
//               <p>Name: <b>{ "There"}</b></p>
//               <p>Email: <b>{"Empty Email, not possible to send email"}</b></p>
//             </DialogDescription>
//           </DialogHeader>
//           <FieldGroup>
//             <Field>
//               <Label htmlFor="message">Message</Label>
//               <Textarea id="message" name="message" onChange={handleFormData} value={formData.message || ""} placeholder="Write message..." ></Textarea>
              
//             </Field>
//           </FieldGroup>
//           <DialogFooter className="mt-[10px]" >
//             <DialogClose asChild>
//               <Button type="button" variant="outline">Cancel</Button>
//             </DialogClose>
//             <Button type="submit">Send Email</Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
// )
}
export function DataSkeleton(){
  return(
    <>
    <TableRow className="" >
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
          </TableRow>
          <TableRow className="" >
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
          </TableRow>
          <TableRow className="" >
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
            <TableCell><Skeleton className="h-4 w-full" /></TableCell>
          </TableRow>
    </>
  )
}



