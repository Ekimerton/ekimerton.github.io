const loremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export default function JobEntry({
  company,
  title,
  time,
  description = loremIpsum,
}) {
  return (
    <>
      <div className="flex justify-between max-sm:flex-col">
        <h4 className="mt-0 mb-0 font-normal">
          <span className="font-normal">{title} @</span> {company}
        </h4>
        <p className="m-0 italic">{time}</p>
      </div>
      <blockquote className="not-italic font-normal">{description}</blockquote>
    </>
  );
}
