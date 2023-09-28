// index.tsx

import PageTransition from "@/components/PageTransition";
import { forwardRef } from "react";


type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <PageTransition ref={ref}>
      <div className="page1 h-screen">

      </div>
    </PageTransition>
  );
}

export default forwardRef(IndexPage);

