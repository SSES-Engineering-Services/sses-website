const ProjectPdfViewer = ({
  file,
  title,
  fill = false,
}) => {
  if (!file) {
    return null;
  }

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={
        fill
          ? "h-full w-full overflow-hidden border border-slate-300 bg-white shadow-sm"
          : "overflow-hidden border border-slate-300 bg-white shadow-sm"
      }
      onContextMenu={handleContextMenu}
    >
      <iframe
        src={`${file}#toolbar=0&navpanes=0&scrollbar=1`}
        title={title || "Project document"}
        className={
          fill
            ? "h-full w-full border-0"
            : "h-[65vh] min-h-105 w-full border-0 sm:h-[75vh] sm:min-h-150"
        }
      />
    </div>
  );
};

export default ProjectPdfViewer;