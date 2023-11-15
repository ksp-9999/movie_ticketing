import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('mymodal') modal:any
  student={
    studentId:0,
    FullName:'',
    mobile:'',
    email:'',
    address:''
  }
  studentsList:any[]=[]

  ngOnInit(): void {
    let localData=localStorage.getItem('studentsList')
    if(localData!=null){
    this.studentsList=JSON.parse(localData)
    }
  }

  onEdit(stu:any,index:any){
    this.addstudent()
    this.student=stu
    let localData=localStorage.getItem('studentsList')
    if(localData!=null){
      let lData=JSON.parse(localData)
      let editedData=lData.splice(index,1,this.student)
      localStorage.setItem('studentsList',JSON.stringify(editedData))
      this.studentsList=editedData
    }
  }
  onDel(stu:any){
    let localData=localStorage.getItem('studentsList')
    if(localData!=null){
      let localD=JSON.parse(localData)
      let filteredData=localD.filter((sitem:any)=>{return sitem.studentId!=stu.studentId})
      localStorage.setItem('studentsList',JSON.stringify(filteredData))
      this.studentsList=filteredData
    }else{

    }
  }

  addstudent(){
    this.modal.nativeElement.style.display='block'
  }
  closemodal(){
    this.modal.nativeElement.style.display='none'
  }

  savestudent(){
    debugger
    let localData=localStorage.getItem('studentsList')
    if(localData!=null){
      this.studentsList=JSON.parse(localData)
      this.student.studentId=this.studentsList.length+1
      this.studentsList.push(this.student)
      localStorage.setItem('studentsList',JSON.stringify(this.studentsList))
    }else{
      this.student.studentId=this.studentsList.length+1
    this.studentsList.push(this.student)
    localStorage.setItem('studentsList',JSON.stringify(this.studentsList))
    }
    
    this.student={
    studentId:0,
    FullName:'',
    mobile:'',
    email:'',
    address:''
  }
  this.closemodal()
  }


}
