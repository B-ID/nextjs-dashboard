import React from "react";
import DashboardSkeleton from "../../ui/skeletons";

type Props = {};

const Loading = (props: Props) => {
    const {} = props
  return (
    <div>
      <DashboardSkeleton />
    </div>
  );
};

export default Loading;
