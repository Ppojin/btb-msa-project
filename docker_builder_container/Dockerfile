# docker build -t tester .
# docker run --name tester -v ~/.m2:/var/maven/.m2 -e MAVEN_CONFIG=/var/maven/.m2 -e USER=qwer -e REPO=0963e10c-780e-4546-a12b-730378712459 tester
# docker exec -it tester bash
# docker rm -f tester
# docker rmi tester
FROM maven:3.6.3-openjdk-11

ADD ./tester.sh tester.sh

ENTRYPOINT ["/bin/sh","tester.sh"]

