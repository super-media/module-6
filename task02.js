/*������� 2.

�������� �������, ������� ��������� �� ����� ����� ����� (�� �� ������ 1 000), ����������, 
�������� �� ��� �������, � ������� ������� ����� ��� ���. ���� ������� ������ 1 000, 
�� ��������� ���������, ��� ������ �������. �������� �������� �� ����� 0 � 1.
*/

function getSimpleNumber() { // ��������� �������
  let inputNumber = prompt("������� ���������� �����: ");
  inputNumber = +inputNumber;
  if (inputNumber > 1000) {
    alert(`����� ������ 1000, �������� ����������.`)
  } else if (inputNumber < 2 ) {
    alert(`����� ������ 2, �������� ����������.`)
  } else {
    let simpleTest = true;
    for (let i = 2; i < inputNumber; i++) {  //����������� �������� �� ����� �������
	    if (inputNumber % i == 0)
      simpleTest = false      
        } if (simpleTest == true) 
        {alert(`����� ${inputNumber} �������.`)
        } else {alert(`����� ${inputNumber} �������.`)}
  }
}
getSimpleNumber(); // �������� �������