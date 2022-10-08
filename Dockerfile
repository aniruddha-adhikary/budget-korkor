FROM denoland/deno:1.26.0 AS build-stage
ENV WORKDIR=/opt/app
WORKDIR $WORKDIR

COPY . .

RUN ["./deploy/build.sh"]

FROM denoland/deno:1.26.0 AS deploy-stage
ENV WORKDIR=/opt/app
WORKDIR $WORKDIR

COPY --from=0 $WORKDIR/dist/budget-korkor .

CMD ["./budget-korkor"]

