// Viết một hàm có tên sum nhận vào một mảng số nguyên và trả về tổng của tất cả các số chẵn trong mảng.
//     Yêu Cầu chi tiết:
//     Sử dụng vòng lặp for...of để duyệt qua từng phần tử trong mảng.
//     Kiểm tra xem mỗi phần tử có phải là số chẵn hay không.
//     Nếu là số chẵn, thêm giá trị của nó vào tổng.
//     Trả về tổng cuối cùng.

function sum(number){
    let total=0; // biến tổng bắt đầu từ 0
    for(let num of number){// duyệt từng phần tử
        if( num%2===0){ // kiểm tra xem phải số chăn hay không

            // nếu là số chẵn sẽ + vào biến total
            num += tatol;
        }
    }
    return total; // sau khi chjay hết mảng trả về  tổng các số chẵn
}

console.log (sum([1,2,3,4,5,6])); // kq tra về 12