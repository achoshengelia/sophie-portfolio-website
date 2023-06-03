export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const project = await fetch(`https://.../${id}`).then(res => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: project.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages]
    }
  };
}

const ProjectPage = ({ params }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Project with id:{params.id} page</h1>
    </main>
  );
};

export default ProjectPage;
