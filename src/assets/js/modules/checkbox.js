import selectors from "../selectors/selectors.js";

/**
 * Обеспечивает поведение, при котором среди всех чекбоксов из selectors.checkbox
 * может быть выбран только один. При установке одного чекбокса в состояние checked=true,
 * остальные автоматически снимают отметку.
 */
const toggleCheckedCheckbox = () => {
  selectors.checkbox.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      if (checkbox.checked) {
        selectors.checkbox.forEach((cb) => {
          if (cb !== checkbox) cb.checked = false;
        });
      }
    });
  });
};

export default toggleCheckedCheckbox;
