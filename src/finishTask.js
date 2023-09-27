import { setAttributeList } from "./setAttributeList.js";
export function finishTask(e) {
  const task = e.target.nextSibling;
  const icon = e.target;
  const path = icon.firstChild;
  task.setAttribute("style", "text-decoration:line-through");
  setAttributeList(icon, {
    class: "icon-check",
  });
  setAttributeList(path, {
    d: "M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z",
  });
  const newPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  setAttributeList(newPath, {
    d: "M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z",
  });
  icon.appendChild(newPath);
  icon.style.transition = "all 0.5s ease-in-out";
}
