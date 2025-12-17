const OverlayButton = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;

  return (
    <button
      className="fixed top-4 right-4 z-50 rounded-xl bg-black text-white px-4 py-2 shadow-lg transition-all"
    >
      Filter
    </button>
  );
};

export default OverlayButton;