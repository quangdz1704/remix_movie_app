import { useParams } from "@remix-run/react";

function DynamicParent() {
  const { parentId } = useParams();
  return (
    <div>
      DynamicParent - {parentId}
    </div>
  );
}

export default DynamicParent;