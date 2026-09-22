type Props = {
  params: Promise<{ slug: string }>;
};
export default async function Pages({ params }: Props) {
  const { slug } = await params;
  return <h1 key={slug}>Hello world {slug}</h1>;
}
