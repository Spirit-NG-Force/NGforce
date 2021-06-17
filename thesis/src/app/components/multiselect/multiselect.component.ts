import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

declare interface input {
  id: number;
  itemName: string;
}

@Component({
  selector: "app-multiselect",
  templateUrl: "./multiselect.component.html",
  styleUrls: ["./multiselect.component.css"],
})
export class MultiselectComponent implements OnInit {
  @Input() single = true;
  @Input() text = "Select";
  @Input() dropdownList: [input];
  @Input() selectedItems = [];
  @Output() itemSelect = new EventEmitter<any>();
  @Output() itemDeSelect = new EventEmitter<any>();
  @Output() selectAll = new EventEmitter<any>();
  @Output() deSelectAll = new EventEmitter<any>();

  dropdownSettings = {};
  constructor() {}

  ngOnInit(): void {
    console.log(this.dropdownList);
    this.dropdownSettings = {
      singleSelection: this.single,
      text: this.text, // string
      classes: "",
      enableSearchFilter: true,
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      lazyLoading: this.single,
    };
  }
  onItemSelect(item: any) {
    console.log(this.selectedItems);
    this.itemSelect.emit(item);
  }
  OnItemDeSelect(item: any) {
    console.log(this.selectedItems);
    this.itemDeSelect.emit(item);
  }
  onSelectAll(items: any) {
    this.selectAll.emit(items);
  }
  onDeSelectAll(items: any) {
    this.deSelectAll.emit(items);
  }
}
