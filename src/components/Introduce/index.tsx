type IProps = {
  title: string;
  desc: string;
};

export default function Introduce({ title, desc }: IProps) {
  return (
    <div className="mx-16 my-4">
      <div className="title text-xl font-black">{title}</div>
      <div className="desc my-4">{desc}</div>
    </div>
  );
}
