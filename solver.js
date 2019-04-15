function getValues(){
    let data = [];
    let copy = [];
    for(let i=0;i<9;i++){
        data[i]=[];
        copy[i]=[];
        for(let j=0;j<9;j++){
            let value = document.getElementsByClassName(i+"@"+j)[0].value;
            data[i][j] = value?value:-1;
            copy[i][j]=data[i][j];
        }
    }
let exitCount=0;
		while(true) {
			
			let numberOfUpdates=0;
			for (let i = 0; i < 9; i=i+3) {
				for (let j = 0; j < 9; j=j+3) {
					let valuesToBeFixed =[];
					for (let k = i; k <i+3; k++) {
						for (let k2 = j; k2 < j+3; k2++) {
							if(data[k][k2]!=-1) {
								valuesToBeFixed[data[k][k2]]=1;
							}
						}
					}
					for (let k = 1; k < 10; k++) {
						if(valuesToBeFixed[k]==1)continue;
						let value = k;
						let fixCount=0;
						let row=0;
						let col=0;
						for (let k1 = i; k1 <i+3; k1++) {
							for (let k2 = j; k2 < j+3; k2++) {
								if(data[k1][k2]==-1) {
									let l=0;
									let countRow=0;
									for (; l < 9; l++) {
										if(data[k1][l]==-1) {
											countRow++;
										}
										if(data[k1][l]==value) {
											break;
										}
									}
									let countCol=0;
									let l2=0;
									for (; l2 < 9; l2++) {
										if(data[l2][k2]==-1) {
											countCol++;
										}
										if(data[l2][k2]==value) {
											break;
										}
									}
									let flag = true;
									if((countCol==1||countRow==1)&&l==9&&l2==9) {
										data[k1][k2]=value;
										numberOfUpdates++;
										fixCount=0;
										flag = false;
									}
									if(l==9&&l2==9&&flag) {
										row=k1;
										col=k2;
										fixCount++;
									}
								}
								if(numberOfUpdates!=0)break;
								
							}
							if(numberOfUpdates!=0)break;
						}
						if(fixCount==1) {
							data[row][col]=value;
							numberOfUpdates++;
							break;
						}
						if(numberOfUpdates!=0)break;
					}
					if(numberOfUpdates!=0) {
						i=i-3;
						j=j-3;
						numberOfUpdates=0;
						break;
					}
				}
			}
			if(numberOfUpdates==0) {
				exitCount++;
				
			}
			if(exitCount==3) {
				break;
			}
        }
        let comeout = false;
        for (let k = 0; k < 9; k++) {
			for (let k3 = 0; k3 < 9; k3++) {
                let ele = document.getElementsByClassName(k+"@"+k3)[0];
                if(data[k][k3]==-1){
                    comeout=true;
                    break;
                }
                ele.value = data[k][k3];
				if(copy[k][k3]==-1){
                    ele.setAttribute('class','solvedValue');
                }
            }
            if(comeout){
                alert("please check the input");
                break;
            }
        }
        document.getElementById('submitButon').disabled=true;
        document.getElementById('msg').hidden=false;
    }