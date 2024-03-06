import SimpleBar from "simplebar-react";

export const Scrollbar = () => {
  return (
    <div className="grow-1 h-full overflow-hidden">
      <SimpleBar className="max-h-full">
        <style>
          {`
          .simplebar-scrollbar:before {
            background-color: rgba(0, 0, 0, 0.48);
          }
          .simplebar-scrollbar.simplebar-visible:before {
            opacity: 1;
          }
          .simplebar-mask {
            z-index: inherit;
          }
        `}
        </style>
      </SimpleBar>
    </div>
  );
};
