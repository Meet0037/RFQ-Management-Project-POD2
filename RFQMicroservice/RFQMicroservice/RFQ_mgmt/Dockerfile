#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["RFQ_mgmt/RFQ_mgmt.csproj", "RFQ_mgmt/"]
RUN dotnet restore "RFQ_mgmt/RFQ_mgmt.csproj"
COPY . .
WORKDIR "/src/RFQ_mgmt"
RUN dotnet build "RFQ_mgmt.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "RFQ_mgmt.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RFQ_mgmt.dll"]