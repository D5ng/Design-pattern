# 싱글톤 패턴

> 싱글톤 디자인 패턴이란? Singleton 패턴을 사용하면 특정 개체의 인스턴스 수를 하나로 제한할 수 있습니다. 이 단일 인스턴스를 싱글톤이라고 합니다. 싱글톤은 네임스페이스 오염 및 관련 이름 충돌 위험을 제한하기 때문에 JavaScript에서 특히 중요한 전역 변수의 필요성을 줄입니다.

프로세스를 관리하는 프로그램을 작성하고 싶다고 가정을 해보자.    
프로세스 관리자는 하나 이상의 프로세스를 가질 수 있지만   
해당 프로세스를 관리하는 프로세스 관리자는 하나만 있길 원할때 즉 1개 이상으로는 생성할 수 없게 만들때 사용할 수 있다.



### Reference
youtubeChannel: DevSage    
https://www.youtube.com/watch?v=kuirGzhGhyw&list=PLFKDYTlP3abzwWleHq1WHcKyi8nCPY74s