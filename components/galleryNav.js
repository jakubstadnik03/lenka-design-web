import Link from "next/link";
export default function galleryNav({ link, title, img }) {
  return (
    <Link href="#cely-dum">
      <figure>
        <figcaption className="opacity">{title}</figcaption>
        <img src={img} alt={title} />
      </figure>
    </Link>
  );
}
