import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ryb-list",
  templateUrl: "./ryb-list.component.html",
  styleUrls: ["./ryb-list.component.sass"]
})
export class RybListComponent implements OnInit {
  @Input("label") label: string;
  @Input("status") status: string;
  @Input("data") data: object;
  constructor() {}

  ngOnInit(): void {}
}
