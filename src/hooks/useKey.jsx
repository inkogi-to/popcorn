import { useEffect } from "react";

function useKey(key, action) {
  useEffect(() => {
    function handleKeydown(e) {
      if (e.key.toLowerCase() === key.toLowerCase()) action();
    }
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [key, action]);
}
export default useKey;
