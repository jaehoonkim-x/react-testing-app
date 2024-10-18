import List from "../../shared/ui/list/components/List";

export default function MainPage() {
  const list = ["안녕", "안녕2", "안녕3"];
  return (
    <>
      <h1>메인페이지</h1>
      <List items={list} />
    </>
  );
}
