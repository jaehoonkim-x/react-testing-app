interface ListProps {
  items: string[];
}

export default function List({ items }: ListProps) {
  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      ) : (
        <div>아이템 없음</div>
      )}
    </>
  );
}
