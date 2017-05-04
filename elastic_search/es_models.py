from elasticsearch_dsl import DocType, Text, Date

from elastic_search.es_settings import INDEX_NAME


class DataHead(DocType):
    source = Text()
    link = Text()
    msg = Text()
    location = Text()
    interest = Text()
    job_type = Text()
    create_time = Date()

    class Meta:
        index = INDEX_NAME
