const board1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
const board2 = [
  [6, 8, 9, 7, 2, 5, 4, 3, 1],
  [4, 2, 5, 1, 3, 6, 8, 7, 9],
  [1, 3, 7, 9, 8, 4, 2, 6, 5],
  [2, 5, 8, 4, 7, 1, 6, 9, 3],
  [3, 7, 6, 5, 9, 2, 1, 8, 4],
  [9, 4, 1, 8, 6, 3, 5, 2, 7],
  [7, 1, 3, 2, 5, 8, 9, 4, 6],
  [5, 9, 2, 6, 4, 7, 3, 1, 8],
  [8, 6, 4, 3, 1, 9, 7, 5, 2],
];
const board3 = [
  [6, 8, 3, 2, 4, 5, 9, 1, 7],
  [7, 5, 4, 9, 1, 6, 2, 8, 3],
  [9, 1, 2, 7, 8, 3, 5, 4, 6],
  [3, 6, 1, 4, 5, 2, 7, 9, 8],
  [8, 9, 5, 1, 6, 7, 3, 2, 4],
  [2, 4, 7, 3, 9, 8, 6, 5, 1],
  [1, 2, 8, 6, 3, 9, 4, 7, 5],
  [4, 7, 6, 5, 2, 1, 8, 3, 9],
  [5, 3, 9, 8, 7, 4, 1, 6, 2]
];
const board4 = [
  [9, 6, 7, 5, 3, 1, 2, 4, 8],
  [8, 2, 5, 9, 4, 6, 1, 3, 7],
  [3, 1, 4, 8, 7, 2, 6, 5, 9],
  [1, 5, 6, 2, 9, 4, 7, 8, 3],
  [7, 8, 9, 1, 5, 3, 4, 6, 2],
  [4, 3, 2, 7, 6, 8, 9, 1, 5],
  [6, 9, 3, 4, 2, 5, 8, 7, 1],
  [2, 4, 8, 3, 1, 7, 5, 9, 6],
  [5, 7, 1, 6, 8, 9, 3, 2, 4]
];
const board5 = [
  [4, 5, 6, 9, 2, 3, 1, 7, 8],
  [9, 3, 8, 6, 1, 7, 2, 5, 4],
  [2, 7, 1, 4, 5, 8, 9, 6, 3],
  [5, 8, 2, 7, 4, 9, 3, 1, 6],
  [1, 6, 7, 3, 8, 2, 4, 9, 5],
  [3, 9, 4, 1, 6, 5, 7, 8, 2],
  [8, 1, 9, 5, 3, 4, 6, 2, 7],
  [7, 2, 3, 8, 9, 6, 5, 4, 1],
  [6, 4, 5, 2, 7, 1, 8, 3, 9]
];
let bnum = Math.floor(Math.random() * 5)
let board = []
switch (bnum) {
  case 0:
    board = board1.map(row => row.slice());
    break;
  case 1:
    board = board2.map(row => row.slice());
    break;
  case 2:
    board = board3.map(row => row.slice());
    break;
  case 3:
    board = board4.map(row => row.slice());
    break;
  case 4:
    board = board5.map(row => row.slice());
    break;

  default:
    board = board5.map(row => row.slice());
    break;
}



function issafe(i, j, k) {
  for (let index = 0; index < 9; index++) {
    if (board[i][index] === k || board[index][j] === k) return false;
  }
  let mr = i - (i % 3);
  let mc = j - (j % 3);
  for (let a = mr; a < mr + 3; a++) {
    for (let b = mc; b < mc + 3; b++) {
      if (board[a][b] == k) return false;
    }
  }
  return true;
}
function swaprow1() {
  let r1 = Math.floor(Math.random() * 3)
  let r2 = Math.floor(Math.random() * 3)
  while (r1 == r2) {
    r2 = Math.floor(Math.random() * 3)
  }
  let a = board[r1];
  board[r1] = board[r2];
  board[r2] = a;
}
function swaprow2() {
  let r1 = Math.floor(Math.random() * 3) + 3
  let r2 = Math.floor(Math.random() * 3) + 3
  while (r1 == r2) {
    r2 = Math.floor(Math.random() * 3) + 3
  }
  let a = board[r1];
  board[r1] = board[r2];
  board[r2] = a;
}
function swaprow3() {
  let r1 = Math.floor(Math.random() * 3) + 6
  let r2 = Math.floor(Math.random() * 3) + 6
  while (r1 == r2) {
    r2 = Math.floor(Math.random() * 3) + 6
  }
  let a = board[r1];
  board[r1] = board[r2];
  board[r2] = a;
}
function swapcol1() {
  let c1 = Math.floor(Math.random() * 3)
  let c2 = Math.floor(Math.random() * 3)
  while (c1 == c2) {
    c1 = Math.floor(Math.random() * 3)
    c2 = Math.floor(Math.random() * 3)
  }
  let a = []
  for (let index = 0; index < 9; index++) {
    a.push(board[index][c1])
  }
  for (let index = 0; index < 9; index++) {
    board[index][c1] = board[index][c2]
  }
  for (let index = 0; index < 9; index++) {
    board[index][c2] = a[index]
  }

}
function swapcol2() {
  let c1 = Math.floor(Math.random() * 3) + 3
  let c2 = Math.floor(Math.random() * 3) + 3
  while (c1 == c2) {
    c1 = Math.floor(Math.random() * 3) + 3
    c2 = Math.floor(Math.random() * 3) + 3
  }
  let a = []
  for (let index = 0; index < 9; index++) {
    a.push(board[index][c1])
  }
  for (let index = 0; index < 9; index++) {
    board[index][c1] = board[index][c2]
  }
  for (let index = 0; index < 9; index++) {
    board[index][c2] = a[index]
  }

}
function swapcol3() {
  let c1 = Math.floor(Math.random() * 3) + 6
  let c2 = Math.floor(Math.random() * 3) + 6
  while (c1 == c2) {
    c1 = Math.floor(Math.random() * 3) + 6
    c2 = Math.floor(Math.random() * 3) + 6
  }
  let a = []
  for (let index = 0; index < 9; index++) {
    a.push(board[index][c1])
  }
  for (let index = 0; index < 9; index++) {
    board[index][c1] = board[index][c2]
  }
  for (let index = 0; index < 9; index++) {
    board[index][c2] = a[index]
  }

}
function transpose() {
  let temp = board.map(row => row.slice());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board[i][j] = temp[j][i];
    }
  }
}
function remapDigits() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffled = digits.slice().sort(() => Math.random() - 0.5);
  const map = {};

  for (let i = 0; i < 9; i++) {
    map[digits[i]] = shuffled[i];
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board[i][j] = map[board[i][j]];
    }
  }
}

function setboard() {
  let cnt = 0;
  while (cnt <= 10) {
    let n = Math.floor(Math.random() * 7)
    switch (n) {
      case 0:
        swaprow1();
        break;
      case 1:
        swaprow2();
        break;
      case 2:
        swaprow3();
        break;
      case 3:
        swapcol1();
        break;
      case 4:
        swapcol2();
        break;
      case 5:
        transpose();
        break;
      case 6:
        swapcol3()
        break;

      default:
        break;
    }
    cnt++;
  }
}
setboard();
remapDigits();
let ansboard = board.map(row => row.slice());

//  ******************************************************* // solver/checker

let cnt = 0;
function sudok(i, j) {
  if (i == 9) {
    cnt++;
    return cnt < 2;
  }


  let next_row = i;
  let next_col = j + 1;

  if (next_col == 9) {
    next_row++;
    next_col = 0;
  }
  if (board[i][j] != 69)
    sudok(next_row, next_col);
  else {
    for (let k = 1; k <= 9; k++) {
      if (issafe(i, j, k, board)) {
        board[i][j] = k;
        if (!sudok(next_row, next_col)) {
          board[i][j] = 69;
          return false;
        }
        board[i][j] = 69
      }
    }

  }
  return true;
}
function sudokcheck() {
  cnt = 0;
  const f = sudok(0, 0);
  if (cnt == 1) return true;
  else return false;
}

// *******************************************************************// setting the board
let remcnt = 50;
let remind = []
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    remind.push([i, j])
  }
}
let shuffind = remind.slice().sort(() => Math.random() - 0.5);
function prepareboard() {
  while (remcnt && shuffind.length) {
    let [r, c] = shuffind.pop()
    if (board[r][c] === 69) continue;
    const t = board[r][c]
    board[r][c] = 69
    if (!board[r] || board[r].length != 9) {
      throw new Error("Board structure invalid");
    }
    if (sudokcheck()) {
      remcnt--;
    }
    else {
      board[r][c] = t;
    }

  }

}
function tries() {
  let t = 8;
  while (t && remcnt) {
    prepareboard();
    shuffind = remind.slice().sort(() => Math.random() - 0.5);
    t--;
  }
}
tries()
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] !== 69) {
      let id = i.toString() + j.toString();
      let element = document.getElementById(id)
      element.innerText = board[i][j]
      element.contentEditable = false;
      element.className = 'col_change';
      element.style.fontWeight = 'bold';
    }
  }
}
let errcnt = 0;
let undo = []
let undo_button = document.getElementById('clear')
let bd = document.getElementById('msg')
let error_indices = []
function error_handling() {
  errcnt = 0;
  error_indices = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== 69) {
        let id = i.toString() + j.toString();
        let element = document.getElementById(id);
        if (!element) continue;
        let value = Number(board[i][j]);
        if (!isNaN(value)) {
          const t = board[i][j]
          board[i][j] = 69
          if (!issafe(i, j, value)) {
            errcnt++;
            error_indices.push([i, j])
          }
          board[i][j] = t
        }
      }
    }
  }
  if (errcnt >= 3) {
    bd.innerText = `${errcnt} errors wrong direction mate!`;
    setTimeout(() => {
      bd.innerText = ""
    }, 4000)
  }
}
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let id = i.toString() + j.toString();
    let element = document.getElementById(id)
    let ch = false;
    element.addEventListener('input', function () {

      board[i][j] = element.innerText
      ch = true
      undo.push([i, j])
      element.style.backgroundColor = 'rgba(68, 209, 209, 0.559)';
      element.style.fontWeight = 'bold';
      error_handling();
    })
  }
}
undo_button.addEventListener('click', function () {
  if (undo.length !== 0) {
    let [r, c] = undo.pop()
    let del_id = r.toString() + c.toString()
    board[r][c] = 69;
    document.getElementById(del_id).innerText = ''
    document.getElementById(del_id).style.backgroundColor = 'rgb(52,158,197)'
    document.getElementById(del_id).style.fontWeight = 'normal'
    error_handling()
  }
})
let solve_button = document.getElementById('submit')
function checkSudoku() {
  for (let i = 0; i < 9; i++) {
    let rs = new Set();
    let cs = new Set();
    for (let j = 0; j < 9; j++) {
      let rval = Number(board[i][j]);
      let cval = Number(board[j][i]);

      if (rval < 1 || rval > 9 || rs.has(rval)) return false;
      if (cval < 1 || cval > 9 || cs.has(cval)) return false;

      rs.add(rval);
      cs.add(cval);
    }
  }
  for (let br = 0; br < 9; br += 3) {
    for (let bc = 0; bc < 9; bc += 3) {
      let bset = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let val = Number(board[br + i][bc + j]);
          if (val < 1 || val > 9 || bset.has(val)) return false;
          bset.add(val);
        }
      }
    }
  }
  return true;
}
solve_button.addEventListener('click', function () {
  if (checkSudoku()) {
    bd.innerText = `Congrats Correct Solve!!!`
  }
  else {
    bd.innerText = `Wrong Answer Try Again`
    setTimeout(function () { bd.innerText = ``; }, 4000)
  }
})
let hint_button = document.getElementById('hint')
let hintcnt = 3;

// ************************HINT BUTTON*********************************//

hint_button.addEventListener('click', function () {
  if (hintcnt === 0) {
    bd.innerText = `Out of Hints!`
    setTimeout(function () { bd.innerText = ``; }, 4000)
  }
  else {
    if (errcnt !== 0) {
      let [r, c] = error_indices.pop()
      let id = r.toString() + c.toString()
      let element = document.getElementById(id)
      element.className = 'hint_col'
      setTimeout(function () { element.className = 'col_change'; }, 6000)
      hintcnt--;
    }
    else {
      for (let br = 0; br < 9; br += 3) {
        for (let bc = 0; bc < 9; bc += 3) {
          for (let k = 1; k <= 9; k++) {
            let cnt = 0;
            let r, c
            for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                if (board[br + i][bc + j] === 69 && issafe(br + i, bc + j, k)) {
                  cnt++;
                  r = br + i
                  c = bc + j
                }
              }
            }
            if (cnt === 1) {
              let id = r.toString() + c.toString()
              let element = document.getElementById(id)
              element.className = 'hint_col'
              setTimeout(function () { element.className = ''; }, 6000)
              hintcnt--;
              return;
            }
          }
        }
      }
    }
  }
})




