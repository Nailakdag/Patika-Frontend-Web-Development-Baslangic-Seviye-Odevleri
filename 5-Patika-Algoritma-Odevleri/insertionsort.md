[22,27,16,2,18,6] -> Insertion Sort

* Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
* Big-O gösterimini yazınız.
* Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case:  Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
* Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
* [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

#### [22,27,16,2,18,6] Insertion sorta göre aşamaları;

 1- [22*,27,16,2,18,6]
 2- [22,27*,16,2,18,6]
 3- [16,22,27*,2,18,6]
 4- [2,16,22,27*,18,6]
 5- [2,16,18,22,27*,6]
 6- [2,6,16,18,22,27]

#### Big-O gösterimi;

Best Case : O(n)
Worst Case : O(n^2)
Avarage Case : O(n^2)


#### Time Complexity;

Best Case : [2,6,16,18,22,27]
Worst Case : [27,22,18,16,6,2]
 
#### 18 Sayısı;

Avarage Case kapsamında yer alır.

####  [7,3,5,8,2,9,4,15,6] dizisinin insertion sorta göre ilk 4 adımı;

1- [7*,3,5,8,2,9,4,15,6]
2- [3,7*,5,8,2,9,4,15,6]
3- [3,5,7*,8,2,9,4,15,6]
4- [3,5,7,8*,2,9,4,15,6]