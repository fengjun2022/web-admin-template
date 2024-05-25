export interface inputOption {
  type: "input" | string,
  text: string,
  model: { value: string | number | object },
  disabled?: boolean,
  changeCallback?: (val: string | number) => void
  inputCallback?: (val: string | number) => void
}


export interface selectOption {
  type: "select" | string,
  text: string;
  model: { value: string | number | object },
  options: option[],
  changeCallback?: (val: string | number | [] | object) => void

}


export interface datePickerOption {
  type: "datePicker" | string,
  text: string;
  model: { value: string | number | object | null},
  changeCallback?: (val: string | number | [] | object) => void
}

interface option {
  value: string | number | [] | object,
  label: string | number,
}
