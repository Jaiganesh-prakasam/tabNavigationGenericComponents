import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "key-value",
  templateUrl: "./key-value.component.html",
  styleUrls: ["./key-value.component.sass"]
})
export class KeyValueComponent implements OnInit {
  @Input("keyValue") data: any;
  constructor() {}

  ngOnInit(): void {
  }
}
