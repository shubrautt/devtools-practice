import { useEffect, useRef, useState } from "react";

const loadLazy = (ref: HTMLElement | null, setVal: React.Dispatch<React.SetStateAction<boolean>>) => {
    if(ref === null) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }

            setVal(true);
            observer.disconnect();
        })
    });

    observer.observe(ref);
}

const LazyImage = ({ src, alt }: { src: string, alt: string }) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    loadLazy(ref.current, setShowImage);
  }, [])

  if(showImage) {
    return <img src={src} alt={alt} />
  }

  return <span className="image-placeholder" style={{ display: 'block', width: '200px', height: '300px', background: 'grey' }} ref={ref}></span>;
};

export default LazyImage;
