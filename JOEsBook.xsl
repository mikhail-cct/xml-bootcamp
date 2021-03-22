<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
                <table id="menuTable" border="1" class="indent">
                    <thead>
                        <tr>
                            <th colspan="3">JOEsBook shop</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Author</th>>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/bookmenu/section">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="entree">
                            // this allow to add the elements to the XML file  
                                <tr id="{position()}">
                                    <xsl:attribute name="fiction">
                                        <xsl:value-of select="boolean(@fiction)" />// to confirm if it true of false 
                                    </xsl:attribute>
                                    <td align="center">
                                        <input name="item0" type="checkbox" />// for calculate the value of total 
                                    </td>
                                    <td>
                                        <xsl:value-of select="item" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="price" />
                                    </td>
                                     <td align="right">
                                        <xsl:value-of select="author" />
                                    </td>
                                   
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
    </xsl:template>
</xsl:stylesheet>
