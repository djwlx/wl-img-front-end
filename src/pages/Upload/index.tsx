import style from "./index.module.css";
import { useRef, useEffect } from "react";
export default function Index() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 添加拖拽事件处理
  useEffect(() => {
    fileInputRef.current!.addEventListener("dragenter", (e) => {
      e.preventDefault();
    });
  }, []);
  const changeFile = (e: any) => {
    let imgList = e.target.files;
    console.log(e.target.files);
  };
  return (
    <div className={style.container}>
      <header className={style.header}></header>

      <div ref={fileInputRef} className={style.inputContainer}>
        <div className={style.tips}>点击上传</div>
        <input
          type="file"
          multiple
          accept="image/*"
          className={style.fileInput}
          onChange={changeFile}
        />
        {/* <div className={style.imgList}></div> */}
      </div>

      <footer className={style.footer}></footer>
    </div>
  );
}
