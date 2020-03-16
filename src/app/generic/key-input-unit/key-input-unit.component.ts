import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "key-input-unit",
  templateUrl: "./key-input-unit.component.html",
  styleUrls: ["./key-input-unit.component.sass"]
})
export class KeyInputUnitComponent implements OnInit {
  @Input("key") key: string;
  @Input("value") value: number;
  @Input("unit") unit: number;
  constructor() {}

  ngOnInit(): void {}
}
