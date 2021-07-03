import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JobofferService } from "app/service/joboffer.service";

@Component({
  selector: "app-success-url",
  templateUrl: "./success-url.component.html",
  styleUrls: ["./success-url.component.css"],
})
export class SuccessUrlComponent implements OnInit {
  @Input()
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;
  constructor(private route: ActivatedRoute , private jobservice:JobofferService) {
    this.alerts.push({
      id: 1,
      type: "success",
      strong: "Your payment was successful! ",
      message:
        "Thank you for completing your secure online payment. your subscription is activate ",
      icon: "ui-2_like",
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }
  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(({subscription_name, company_id}) => {
      this.jobservice.postpayment_to_server({subscription_name, company_id}).subscribe((result)=> {
        console.log(result)
      })
      console.log(subscription_name)
    });
  }
}
export interface IAlert {
  id: number;
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}
