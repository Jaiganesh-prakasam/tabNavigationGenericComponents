import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "key-hv-lv",
  templateUrl: "./key-hv-lv.component.html",
  styleUrls: ["./key-hv-lv.component.sass"]
})
export class KeyHvLvComponent implements OnInit {
  @Input("key") key: string;
  @Input("value1") value1: number;
  @Input("value2") value2: number;
  constructor() {}

  ngOnInit(): void {}
}
