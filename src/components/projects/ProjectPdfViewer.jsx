const ProjectPdfViewer = ({ file, title }) => {
  if (!file) return null;

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="overflow-hidden border border-slate-300 bg-white shadow-sm"
      onContextMenu={handleContextMenu}
    >
      <iframe
        src={`${file}#toolbar=0&navpanes=0&scrollbar=1`}
        title={title || "Project document"}
        className="h-[65vh] min-h-[420px] w-full sm:h-[75vh] sm:min-h-[600px]"
      />
    </div>
  );
};

export default ProjectPdfViewer;