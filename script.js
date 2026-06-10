const editToggle = document.querySelector("#edit-toggle");
const salesContent = document.querySelector("#sales-content");
const editableBlocks = document.querySelectorAll(".editable");

editToggle.addEventListener("click", () => {
  const isEditing = salesContent.classList.toggle("is-editing");

  editableBlocks.forEach((block) => {
    block.contentEditable = isEditing ? "true" : "false";
  });

  editToggle.textContent = isEditing ? "完成編輯" : "編輯示意";
});
