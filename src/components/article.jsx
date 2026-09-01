export function Article({ imgUrl, altText, author, header, text }) {
  return (
    <article>
      <img src={imgUrl} alt={altText} className="rounded-t-[5px] h-50 w-full" />
      <div className="py-6 px-8 md:px-10 xl:px-5 rounded-b-[5px] bg-white">
        <p className="preset-8 text-gray-600 mb-4">by {author}</p>
        <p className="preset-6 text-blue-950 cursor-pointer hover:text-green-400 mb-2">
          {header}
        </p>
        <p className="preset-7-r text-gray-600">{text}</p>
      </div>
    </article>
  );
}
