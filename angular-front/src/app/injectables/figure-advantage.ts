import { Injectable } from "@angular/core";
import { BishopFigure, KnightFigure, PawnFigure, QueenFigure, RookFigure } from "../classes/chess-figures";
import { Figure } from "../classes/chess-figures/Figure";
import { ChessField } from "../classes/ChessField";

type AdvantageMapItem = { figure: Figure, count: number };

class AdvantageMap {
  map: {
    [key: string]: AdvantageMapItem;
  } = {};
  color: Figure['color'] = 'white';
  
  constructor(color: Figure['color']) {
    this.color = color;
    this.map.pawns = {
      figure: new PawnFigure(color),
      count: 0,
    };
    this.map.knights = {
      figure: new KnightFigure(color),
      count: 0,
    };
    this.map.queens = {
      figure: new QueenFigure(color),
      count: 0,
    };
    this.map.bishops = {
      figure: new BishopFigure(color),
      count: 0,
    };
    this.map.rooks = {
      figure: new RookFigure(color),
      count: 0,
    };
  }

  traverse(handler: (item: AdvantageMapItem) => boolean | void) {
    for (let key of Object.keys(this.map)) {
      const stopLoop = handler(this.map[key]);
      if (stopLoop) break;
    }
  }

  addFigure(figure: Figure) {
    this.traverse(item => {
      if (item.figure.name !== figure.name) return;
      item.count++;
      return true;
    })
  }

  reset() {
    this.traverse(item => {
      item.count = 0;
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class FigureAdvantage {
  whiteFigures: Figure[] = [];
  blackFigures: Figure[] = [];

  constructor() {}

  calculate(chessField: ChessField) {
    const whiteMap = new AdvantageMap('white');
    const blackMap = new AdvantageMap('black');

    chessField.traverse(square => {
      const { figure } = square;
      if (!figure) return;
      const pieceMap = figure.color === 'white' ? whiteMap : blackMap;
      pieceMap.addFigure(figure);
    });

    const whiteFigures: Figure[] = [];
    const blackFigures: Figure[] = [];

    for (let key of Object.keys(whiteMap.map)) {
      const whiteItem = whiteMap.map[key];
      const blackItem = blackMap.map[key];
      if (whiteItem.count === blackItem.count) continue;

      if (whiteItem.count > blackItem.count) {
        for (let i = 1; i <= whiteItem.count - blackItem.count; i++) {
          whiteFigures.push(blackItem.figure.clone('black'));
        }
      } else {
        for (let i = 1; i <= blackItem.count - whiteItem.count; i++) {
          blackFigures.push(whiteItem.figure.clone('white'));
        }
      }
    }

    this.whiteFigures = whiteFigures;
    this.blackFigures = blackFigures;
  }
}