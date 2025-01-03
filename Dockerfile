FROM openjdk:latest
COPY . /app
RUN javac hello.java
CMD ["java","hi"]
