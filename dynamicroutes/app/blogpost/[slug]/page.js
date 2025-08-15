export default async function Page({ params }) {
  // throw error("error ha");
  const { slug } = await params;
  let languages = [
    "python",
    "php",
    "javascript",
    "java",
    "cpp",
    "cs",
    "ruby",
    "go",
  ];
  if (languages.includes(params.slug)) {
    return <div>My Post: {slug} is exist</div>;
  } else {
    return <div>Post language not Exist</div>;
  }
}
