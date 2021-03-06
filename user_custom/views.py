from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from essentials.serializers import NewsletterSubscriptionSerializer


def main_view(request):
    return render(request, 'index.html', {})


class NewsletterSubscriptionView(APIView):
    def post(self, request, format=None):
        serializer = NewsletterSubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
