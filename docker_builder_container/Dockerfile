# docker build -t ppojin/tester .
# docker run --name tester -v /tmp/m2:/var/maven/.m2 -e MAVEN_CONFIG=/var/maven/.m2 -e USER=qwer -e REPO=0963e10c-780e-4546-a12b-730378712459 ppojin/tester
# docker run --name tester -e MAVEN_CONFIG=/var/maven/.m2 -e USER=qwer -e REPO=0963e10c-780e-4546-a12b-730378712459 ppojin/tester
# docker rm -f tester
# docker exec -it tester bash
# docker rmi tester
FROM maven:3.6.3-openjdk-11

ADD ./tester.sh tester.sh

ENTRYPOINT ["/bin/sh","tester.sh"]

