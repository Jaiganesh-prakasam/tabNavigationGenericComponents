import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ryb-grid",
  templateUrl: "./ryb-grid.component.html",
  styleUrls: ["./ryb-grid.component.sass"]
})
export class RybGridComponent implements OnInit {
  @Input("heading") heading: string;
  @Input("col1Obj") col1: any;
  @Input("col2Obj") col2: any;
  @Input("col3Obj") col3: any;
  constructor() {}

  ngOnInit(): void {}
}
