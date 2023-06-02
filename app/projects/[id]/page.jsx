export const metadata = {
  title: 'Sophie Lazari | Project',
  description: 'A portfolio website for Sophie Lazari'
};

export default function ProjectPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Project with id:{params.id} page</h1>
    </main>
  );
}
