FROM christophesurmont/oracle-xe-11g
ADD init-ddl.tar.gz /docker-entrypoint-initdb.d/
ENV NLS_LANG="BRAZILIAN PORTUGUESE_BRAZIL.AL32UTF8" LANG='pt_BR.UTF-8' LANGUAGE='pt_BR:pt' TZ="Amercia/Sao_Paulo"
CMD /usr/sbin/startup.sh && rm -rf /docker-entrypoint-initdb.d/*.sql && tail -f /dev/null
