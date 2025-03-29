#include <iostream>

using namespace std;

int main ( ){
    float tlmarks,obtmarks,percentage;
    cout<<"Enter your total marks ";
    cin>>tlmarks;
    cout<<"Enter your obtain marks ";
    cin>>obtmarks;
    percentage = obtmarks*100/tlmarks;
    cout<<"Your percentage is "<<percentage;
return 0;
}