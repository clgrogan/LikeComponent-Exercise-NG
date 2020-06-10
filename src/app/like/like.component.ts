import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"],
})
export class LikeComponent {
  @Input() isLiked: boolean;
  @Input() postText: string;
  @Input() likesCount: number;
  // @Output("change") changeLike = new EventEmitter();

  writeVariables = () => {
    console.log();
    console.log("isLiked", this.isLiked);
  };

  toggleIsLiked = () => (this.isLiked = !this.isLiked);
}
