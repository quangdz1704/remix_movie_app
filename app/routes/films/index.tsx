import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: 'styles'},
  ]
}

export const meta: MetaFunction = () => {
  return {
    title: 'Amazing films storage!',
    description: 'Films storage!'
  }
}

// SERVER SIDE 
export const loader: LoaderFunction = () => {

}

const FilmsIndex = () => {
  return (
    <div>
      Films 
    </div>
  );
}

export default FilmsIndex;