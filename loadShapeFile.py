import geopandas as gpd
from sqlalchemy import create_engine

# variables
DB_URL = 'postgresql://postgres:1234@localhost:5432/world'
SHAPEFILE_PATH = './test_shapefile2.zip!test_shapefile2'
REGION_NAME = 'Norway'

# define engine to connect
engine = create_engine(DB_URL)

# read the shape file
pointDf = gpd.read_file(SHAPEFILE_PATH)

# save it to database
pointDf.to_postgis('fields',engine, index=True, index_label='Index', if_exists='append')


# modify the data and add name of region in every row
def add_name(r):
    r["name"] = REGION_NAME
    return r
pointDf = pointDf.apply(add_name, axis=1)

# modify the geometry column's name and save
pointDf = pointDf.rename_geometry('way')
#print(pointDf.head())
pointDf.to_postgis('coverage',engine, index=True, index_label='Index', if_exists='append')
