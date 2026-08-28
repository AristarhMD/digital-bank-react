export default function BtnRequest(props) {
  return (
    <button
      className={`cursor-pointer px-8 py-2 rounded-3xl bg-gradient-1 preset-7-b text-white hover:opacity-60 ${props.className ? props.className : ""}`}
    >
      Request Invite
    </button>
  );
}
